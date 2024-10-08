import React from 'react'
import Cookie from '../cookie/Cookie'

export default function Footer () {

    return <>
    <footer>
        <Cookie/>
            <div className="border border-x-0 border-b-0 border-t-1 border-[var(--footer-border)] mt-6 pt-4 flex justify-between flex-wrap">
        <p>&copy; 2024 QXIP BV</p>
        <div>
          <a href="/legal/cookies" className="text-slate-50 mr-4">Cookies</a>
          <a href="mailto:info@qxip.net" className="text-slate-50 mr-4">Contact Us</a>
        </div>
      </div>
    </footer>
    </>
}
