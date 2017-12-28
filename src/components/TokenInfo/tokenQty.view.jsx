import React from 'react';

import BLOCKCHAIN_INFO from "../../../env"
import { roundingNumber } from "../../services/utils/conveter"

import IMAGE_ICON from "../../assets/img"

const TokenQtyView = ({data}) => {
  return (
    <div>
      <div className="logo">
        <img src={IMAGE_ICON[data.info.symbol]} alt="" />
      </div>
      <div className="setting">
        <span>settings</span>
        <i className="fa fa-cog"></i>
      </div>
      <div className="row">
        <div className="col-6 col-md-2">
          <div className="label">TOKEN</div>
          <div className="value">{data.info.symbol}</div>
        </div>
        <div className="col-6 col-md-3">
          <div className="label">
            <span className="mr-auto">current reserve qty</span>
            <span className="text-secondary">target</span>
          </div>
          <div className="value">
            <span className="mr-auto">{roundingNumber(data.reserveBalance)}</span>
            <small>/ {roundingNumber(data.reserveTarget)}</small>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="label">
            <span className="mr-auto">current reserve qty</span>
            <span className="text-secondary">target</span>
          </div>
          <div className="value">
            <span className="mr-auto">{roundingNumber(data.totalQty)}</span>
            <small>/ {roundingNumber(data.totalTarget)}</small>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="label">&nbsp;</div>
          <div className="value value-progress">{data.persent}%</div>
          <div className="progress">
            <div className="progress-bar bg-knc" style={{ width: data.percent + "%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenQtyView;