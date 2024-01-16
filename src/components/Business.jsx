import React from 'react';
import styles from '../style';

const Business = () => {
  return (
    <div className="metrics mb-6">
    <div className="frame">
      <div className="div">
        <div className="text-wrapper-2">Prijs</div>
        <p className="p">De huidige waarde van 1 Bitcoin</p>
      </div>
      <div className="frame-2">
        <div className="frame-3">
          {/* <Icon icon="caret-down" iconClassName="icon-instance" size="sm" /> */}
          <div className="text-wrapper-3">2.55%</div>
        </div>
        <div className="text-wrapper-4">€ 39,355.99</div>
      </div>
    </div>
    <div className="frame-4">
      <div className="div">
        <div className="text-wrapper-2">Totale marktwaarde</div>
        <p className="text-wrapper-5">Huidige prijs x circulerend aanbod</p>
      </div>
      <div className="frame-2">
        <div className="frame-3">
          {/* <Icon icon="caret-up" iconClassName="design-component-instance-node" size="sm" /> */}
          <div className="text-wrapper-6">2.55%</div>
        </div>
        <div className="text-wrapper-4">€765,211,868</div>
      </div>
    </div>
    <div className="frame-5">
      <div className="div">
        <div className="text-wrapper-2">Volume</div>
        <p className="p">BTC verhandeld in de laatste 24 uur</p>
      </div>
      <div className="frame-6">
        <div className="text-wrapper-7">598,275 BTC</div>
        <div className="text-wrapper-4">€25,330,087.50</div>
      </div>
    </div>
    <div className="frame-7">
      <div className="frame-8">
        <div className="text-wrapper-2">Hashrate</div>
        <p className="text-wrapper-8">Rekenkracht en beveiliging van het netwerk</p>
      </div>
      <div className="frame-2">
        <div className="text-wrapper-7">598,275 BTC</div>
        <div className="text-wrapper-4">460.39 EH/s</div>
      </div>
    </div>
  </div>
  )
}

export default Business