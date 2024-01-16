import styles from "./style";

import { Navbar, Hero, AffiliateHighlights, Stats, Business, Billing, CardDeal, Testimonials,
Clients, CTA, Footer } from "./Components";
import { GetRequest } from "./GetRequest";

const App = () => (

    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Hero /> */}
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          
          <Stats />
          <AffiliateHighlights />
          
          {/* <Metrics /> */}
          <Business />
          <GetRequest />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>


    </div>

)

export default App