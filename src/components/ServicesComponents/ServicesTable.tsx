const ServicesTable = () => {
  return (
    <div className='services-table-container'>
      <div className='services-table'>
        <div className='services-card'>
          <div className='services-icon-container'>
            <svg
              className='build-service-icon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 640 640'
            >
              <path d='M102.8 57.3C108.2 51.9 116.6 51.1 123 55.3L241.9 134.5C250.8 140.4 256.1 150.4 256.1 161.1L256.1 210.7L346.9 301.5C380.2 286.5 420.8 292.6 448.1 320L574.2 446.1C592.9 464.8 592.9 495.2 574.2 514L514.1 574.1C495.4 592.8 465 592.8 446.2 574.1L320.1 448C292.7 420.6 286.6 380.1 301.6 346.8L210.8 256L161.2 256C150.5 256 140.5 250.7 134.6 241.8L55.4 122.9C51.2 116.6 52 108.1 57.4 102.7L102.8 57.3zM247.8 360.8C241.5 397.7 250.1 436.7 274 468L179.1 563C151 591.1 105.4 591.1 77.3 563C49.2 534.9 49.2 489.3 77.3 461.2L212.7 325.7L247.9 360.8zM416.1 64C436.2 64 455.5 67.7 473.2 74.5C483.2 78.3 485 91 477.5 98.6L420.8 155.3C417.8 158.3 416.1 162.4 416.1 166.6L416.1 208C416.1 216.8 423.3 224 432.1 224L473.5 224C477.7 224 481.8 222.3 484.8 219.3L541.5 162.6C549.1 155.1 561.8 156.9 565.6 166.9C572.4 184.6 576.1 203.9 576.1 224C576.1 267.2 558.9 306.3 531.1 335.1L482 286C448.9 253 403.5 240.3 360.9 247.6L304.1 190.8L304.1 161.1L303.9 156.1C303.1 143.7 299.5 131.8 293.4 121.2C322.8 86.2 366.8 64 416.1 63.9z' />
            </svg>
          </div>
          <div className='services-title'>Build Package</div>
          <div className='services-subtitle'>
            Welcome to your new site. Built from scratch.
          </div>
          <div className='services-list-container'>
            <ul className='services-list build-list'>
              <li>Brand-new website, built from the ground up</li>
              <li>Built with your choice of platform or custom code</li>
              <li>Optional mini brand guide (colors & typography)</li>
              <li></li>
              <li>SEO-friendly setup</li>
            </ul>
            {/* <div className='services-cta-container'>
              <button className='services-cta build-cta'>Get A Quote!</button>
            </div> */}
          </div>
        </div>
        <div className='services-card'>
          <div className='services-icon-container'>
            <svg
              className='refresh-service-icon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 640 640'
            >
              <path d='M512.5 74.3L291.1 222C262 241.4 243.5 272.9 240.5 307.3C302.8 320.1 351.9 369.2 364.8 431.6C399.3 428.6 430.7 410.1 450.1 381L597.7 159.5C604.4 149.4 608 137.6 608 125.4C608 91.5 580.5 64 546.6 64C534.5 64 522.6 67.6 512.5 74.3zM320 464C320 402.1 269.9 352 208 352C146.1 352 96 402.1 96 464C96 467.9 96.2 471.8 96.6 475.6C98.4 493.1 86.4 512 68.8 512L64 512C46.3 512 32 526.3 32 544C32 561.7 46.3 576 64 576L208 576C269.9 576 320 525.9 320 464z' />
            </svg>
          </div>
          <div className='services-title'>Refresh Package</div>
          <div className='services-subtitle'>
            Update your site’s look and feel without starting over.
          </div>
          <div className='services-list-container'>
            <ul className='services-list refresh-list'>
              <li>Revamp existing site with updated design and layout</li>
              <li>Improve speed, readability, and mobile performance</li>
              <li>Modernize fonts, colors, and spacing</li>
              <li>Accessibility & SEO touch-up</li>
              <li>Includes 1 round of revisions</li>
            </ul>
            {/* <div className='services-cta-container'>
              <button className='services-cta refresh-cta'>Get A Quote!</button>
            </div> */}
          </div>
        </div>
        <div className='services-card'>
          <div className='services-icon-container'>
            <svg
              className='maintain-service-icon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 640 640'
            >
              <path d='M96 96C96 78.3 110.3 64 128 64L352 64C369.7 64 384 78.3 384 96C384 113.7 369.7 128 352 128L352 289.4C285.9 319.7 240 386.5 240 464C240 503.7 252 540.6 272.7 571.2C262.4 574.3 251.4 576 240 576C178.1 576 128 525.9 128 464L128 128C110.3 128 96 113.7 96 96zM192 128L192 256L288 256L288 128L192 128zM288 464C288 384.5 352.5 320 432 320C511.5 320 576 384.5 576 464C576 543.5 511.5 608 432 608C352.5 608 288 543.5 288 464zM489.4 403.1C482.3 397.9 472.2 399.5 467 406.6L414 479.5L387.2 452.7C381 446.5 370.8 446.5 364.6 452.7C358.4 458.9 358.4 469.1 364.6 475.3L404.6 515.3C407.9 518.6 412.5 520.3 417.2 519.9C421.9 519.5 426.1 517.1 428.9 513.4L492.9 425.4C498.1 418.3 496.5 408.2 489.4 403.1z' />
            </svg>
          </div>
          <div className='services-title'>Maintain Package</div>
          <div className='services-subtitle'>
            Keep your site running smoothly month after month.
          </div>
          <div className='services-list-container'>
            <ul className='services-list maintain-list'>
              <li>Monthly maintenance and content updates</li>
              <li>Bug fixes, small layout adjustments, plugin updates</li>
              <li>Priority support (minimum 2 hrs per month)</li>
              <li>Monthly summary of fixes and recommendations</li>
              <li>“Set it and forget it” reliability</li>
            </ul>
            {/* <div className='services-cta-container'>
              <button className='services-cta maintain-cta'>
                Get A Quote!
              </button>
            </div> */}
          </div>
        </div>
        <div className='services-card'>
          <div className='services-icon-container'>
            <svg
              className='data-service-icon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 640 640'
            >
              <path d='M192 112L304 112L304 200C304 239.8 336.2 272 376 272L464 272L464 512C464 520.8 456.8 528 448 528L192 528C183.2 528 176 520.8 176 512L176 128C176 119.2 183.2 112 192 112zM352 131.9L444.1 224L376 224C362.7 224 352 213.3 352 200L352 131.9zM192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 250.5C512 233.5 505.3 217.2 493.3 205.2L370.7 82.7C358.7 70.7 342.5 64 325.5 64L192 64zM248 320C234.7 320 224 330.7 224 344C224 357.3 234.7 368 248 368L392 368C405.3 368 416 357.3 416 344C416 330.7 405.3 320 392 320L248 320zM248 416C234.7 416 224 426.7 224 440C224 453.3 234.7 464 248 464L392 464C405.3 464 416 453.3 416 440C416 426.7 405.3 416 392 416L248 416z' />
            </svg>
          </div>
          <div className='services-title'>Data Package</div>
          <div className='services-subtitle'>
            See what’s working, what’s not, and where to grow next.
          </div>

          <div className='services-list-container'>
            <ul className='services-list data-list'>
              <li>Quarterly performance report (SEO, traffic, usability)</li>
              <li>Manual regression & usability testing</li>
              <li>Google Analytics overview with insights</li>
              <li>3-page summary + recommended actions</li>
              <li>Optional consultation call (+$50)</li>
            </ul>
            {/* <div className='services-cta-container'>
              <button className='services-cta data-cta'>Get A Quote!</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTable;
