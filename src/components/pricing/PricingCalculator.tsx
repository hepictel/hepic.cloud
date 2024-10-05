import React, { useState } from 'react'
import styles from './PricingCalculator.module.css'

export const frontmatter = {
  sidebar: false,
  pageType: 'custom'
};

const plans = [
  {
    name: 'Dev',
    disk: '640GB NVMe', 
    specs: {
      ram: '32GB RAM',
      cpu: '8x Intel vCPU',
      storage: '500 GB Storage',
      transfer: '8TB/Month Transfer',
      support: 'Email Support'
    },
    price: {
      monthly: 499,
      yearly: 4990
    }
  },
  {
    name: 'Pro',
    disk: '960GB NVMe',
    specs: {
      ram: '48GB RAM',
      cpu: '10x Intel vCPU',
      storage: '1 TB Storage',
      transfer: '16TB/Month Transfer',
      support: 'Email Support'
    },
    price: {
      monthly: 999,
      yearly: 9900
    }
  },
  {
    name: 'Enterprise',
    disk: '1.2TB NVMe',
    specs: {
      ram: '64GB RAM',
      cpu: '12x Intel vCPU',
      storage: '2 TB Storage',
      transfer: '24TB/Month Transfer',
      support: 'Helpdesk Support'
    },
    price: {
      monthly: 1699,
      yearly: 16900
    }
  }
]

const extraStoragePrice = 150 // per TB per month
const snapshotsPrice = 50 // per month

const serverLocations = [
  { city: 'Dallas', region: 'US Central', country: 'US', discount: false },
  { city: 'Atlanta', region: 'US East', country: 'US', discount: false },
  { city: 'Los Angeles', region: 'US West', country: 'US', discount: false },
  { city: 'Chicago', region: 'US Central', country: 'US', discount: false },
  { city: 'Seattle', region: 'US West', country: 'US', discount: false },
  { city: 'New York', region: 'US East', country: 'US', discount: false },
  { city: 'Frankfurt', region: 'Germany', country: 'DE', discount: false },
  { city: 'Amsterdam', region: 'Netherlands', country: 'NL', discount: false },
  { city: 'London', region: 'England', country: 'GB', discount: false },
  { city: 'Mumbai', region: 'India', country: 'IN', discount: false },
  { city: 'Tokyo', region: 'Japan', country: 'JP', discount: false },
  { city: 'Singapore', region: 'Singapore', country: 'SG', discount: false },
  { city: 'Sydney', region: 'Australia', country: 'AU', discount: false },
  { city: 'Toronto', region: 'Canada', country: 'CA', discount: false }
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
        <div className={styles.totalPrice}>
          Total: €{totalPrice}/{isYearly ? 'year' : 'month'}
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
