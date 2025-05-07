import React, { useState } from 'react'
import styles from './PricingCalculator.module.css'

export const frontmatter = {
  sidebar: false,
  pageType: 'custom'
};

const plans = [
  {
    name: 'Startup',
    plan: 'CCX33', 
    specs: {
      ram: '16GB RAM',
      cpu: '8x Intel vCPU',
      storage: '512 GB Storage',
      transfer: '8TB/Month Transfer',
      support: 'Email Support'
    },
    price: {
      monthly: 1599,
      yearly: 15900
    }
  },
  {
    name: 'Enterprise',
    plan: 'CCX43',
    specs: {
      ram: '32GB RAM',
      cpu: '16x Intel vCPU',
      storage: '1.2 TB Storage',
      transfer: '10TB/Month Transfer',
      support: 'Helpdesk Support'
    },
    price: {
      monthly: 2599,
      yearly: 25900
    }
  },
  {
    name: 'Carrier',
    plan: 'CCX53',
    specs: {
      ram: '64GB RAM',
      cpu: '32x Intel vCPU',
      storage: '2.4 TB Storage',
      transfer: '20TB/Month Transfer',
      support: 'Helpdesk Support'
    },
    price: {
      monthly: 3599,
      yearly: 35900
    }
  }
]

const extraStoragePrice = 150 // per TB per month
const snapshotsPrice = 50 // per month

const serverLocations = [
  { city: 'FSN1', region: 'Germany', country: 'EU', discount: false, bandw: 1  },
  { city: 'NBG', region: 'Germany', country: 'EU', discount: false, bandw: 1 },
  { city: 'HEL1', region: 'Finland', country: 'EU', discount: false, bandw: 1 },
  { city: 'SIN1', region: 'Singapore', country: 'APAC', discount: false, bandw: 0.1  },  
  { city: 'HIL', region: 'US West', country: 'US', discount: false, bandw: 0.1 },
  { city: 'ASH', region: 'US East', country: 'US', discount: false, bandw: 0.1 },
]

const PricingCalculator: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0])
  const [isYearly, setIsYearly] = useState(true)
  const [extraStorage, setExtraStorage] = useState(0)
  const [selectedLocation, setSelectedLocation] = useState(serverLocations[0])
  const [includeSnapshots, setIncludeSnapshots] = useState(false)

  const handlePlanChange = (planName: string) => {
    const plan = plans.find(p => p.name === planName)
    if (plan) setSelectedPlan(plan)
  }

  const handleExtraStorageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setExtraStorage(isNaN(value) ? 0 : value)
  }

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const location = serverLocations.find(l => l.city === e.target.value)
    if (location) setSelectedLocation(location)
  }

  const basePlanPrice = isYearly ? selectedPlan.price.yearly : selectedPlan.price.monthly
  const extraStorageCost = extraStorage * extraStoragePrice * (isYearly ? 12 : 1)
  const snapshotsCost = includeSnapshots ? snapshotsPrice * (isYearly ? 12 : 1) : 0
  const totalPrice = basePlanPrice + extraStorageCost + snapshotsCost
  const savings = selectedPlan.price.monthly * 12 - selectedPlan.price.yearly

  return (
    <div className={styles.pricingCalculator}>      
      <div className={styles.planGrid}>
        {plans.map((plan) => (
          <div 
            key={plan.name} 
            className={`${styles.planCard} ${selectedPlan.name === plan.name ? styles.selected : ''}`}
          >
            <input
              type="radio"
              id={plan.name}
              name="plan"
              value={plan.name}
              checked={selectedPlan.name === plan.name}
              onChange={() => handlePlanChange(plan.name)}
              className={styles.srOnly}
            />
            <label htmlFor={plan.name}>
              <h3 className={styles.planName}>{plan.name}</h3>
              <ul className={styles.specsList}>
                {Object.values(plan.specs).map((spec, index) => (
                  <li key={index} className={styles.specItem}>{spec}</li>
                ))}
              </ul>
              <div className={styles.planPrice}>
                €{isYearly ? plan.price.yearly : plan.price.monthly}/{isYearly ? 'year' : 'month'}
              </div>
            </label>
          </div>
        ))}
      </div>

      <div className={styles.optionsRow}>

        <div className={styles.locationContainer}>
            <label htmlFor="server-location">
              <select
                id="server-location"
                value={selectedLocation.city}
                onChange={handleLocationChange}
                className={styles.locationSelect}
              >
                {serverLocations.map((location) => (
                  <option key={location.city} value={location.city}>
                    {location.city} ({location.region})
                    {location.discount ? ' - 10% Off' : ''}
                  </option>
                ))}
              </select>
            </label>
        </div>
        
        <div className={styles.switchContainer}>
          <label htmlFor="billing-cycle" className={styles.switch}>
            <input
              type="checkbox"
              id="billing-cycle"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <span className={styles.slider}></span>
          </label>
          <span>{isYearly ? 'Yearly' : 'Monthly'}</span>
        </div>
        
        <div className={styles.switchContainer}>
          <label htmlFor="snapshots" className={styles.switch}>
            <input
              type="checkbox"
              id="snapshots"
              checked={includeSnapshots}
              onChange={() => setIncludeSnapshots(!includeSnapshots)}
            />
            <span className={styles.slider}></span>
          </label>
          <span>Snapshots</span>
        </div>
        
        

        <div className={styles.storageContainer}>
          <label htmlFor="extra-storage">
            Extra Storage (TB)
            <input
              type="number"
              id="extra-storage"
              min="0"
              value={extraStorage}
              onChange={handleExtraStorageChange}
              className={styles.storageInput}
            />
          </label>
        </div>
        
      </div>

      <div className={styles.pricingSummary}>
        <div className={styles.totalPriceRow}>
          <div className={styles.totalPrice}>
            Total: €{totalPrice}/{isYearly ? 'year' : 'month'}
          </div>
          <a href="/signup" className={styles.signUpButton}>Sign Up</a>
        </div>
        <div className={styles.priceBreakdown}>
          Base plan: €{basePlanPrice}/{isYearly ? 'year' : 'month'}
          {extraStorage > 0 && ` + Extra storage: €${extraStorageCost}/${isYearly ? 'year' : 'month'}`}
          {includeSnapshots && ` + Snapshots: €${snapshotsCost}/${isYearly ? 'year' : 'month'}`}
        </div>
        <div className={styles.savings}>
          You save €{savings} per year with annual billing!
        </div>
      </div>
    </div>
  )
}

export default PricingCalculator
