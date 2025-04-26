import React, { useState, useRef } from 'react';
import './Checkout.css';
import ProgressSteps from './ProgressSteps';
import calendarIcon from '../assets/calendar.svg';
import clockIcon from '../assets/clock.svg';
import truckIcon from '../assets/truck.svg';

const Checkout = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const inputRef = useRef(null);

  const saveTitle = () => {
    setIsEditing(false);
  };

  return (
    <div className="checkoutWrapper">
      <div className="checkoutContainer">
        <div className="prSection">
          <div className="prBox">
            <span className="prLabel">PR</span>
            <span className="prNumber">#000000</span>
          </div>
        </div>
        <div className="progressSectionContainer">
          <ProgressSteps />
        </div>
      </div>

      <div className="titleContainer">
        <span className="titleLabel">Title*</span>
        <div className="titleSpacer" />
        <div className="titleInputWrapper" onClick={() => setIsEditing(true)}>
          {isEditing ? (
            <input
              ref={inputRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={saveTitle}
              autoFocus
              placeholder="Add title for your request"
              className="titleInput"
            />
          ) : (
            <div className="titleText">
              {title !== '' ? title : 'Add title for your request'}
            </div>
          )}
        </div>
      </div>

      <div className="deliverySection">
        <div className="deliveryLeft">
          <div className="deliveryIconAndText">
            <img src={truckIcon} alt="truck" className="icon" />
            <div>
              <div className="label">Delivery location :</div>
              <div className="value">
                A1001, Serenity building, Peace Road, Dove Street,<br />
                Serene Nagar, Bengaluru, Karnataka, 123456, India.
              </div>
            </div>
          </div>
        </div>
        <div className="deliveryRight">
          <div className="deliveryDate">
            <img src={calendarIcon} alt="calendar" className="icon" />
            <span className="label">Request date :</span>
            <span className="value">12 December 2024</span>
          </div>
          <div className="deliveryTime">
            <img src={clockIcon} alt="clock" className="icon" />
            <span className="label">Request time :</span>
            <span className="value">11:00 AM</span>
          </div>
        </div>
      </div>

      <div className="orderDetailsSection">
        <div className="orderDetails">
          <div className="orderDetailsContainer">
            <div className="tableHeader">
              <div className="colProductCustom">
                Product: <span className="productCount">3</span>
              </div>
              <div className="colQty">Qty</div>
              <div className="colUnitPrice">Unit price</div>
              <div className="colDeliveryFee">Delivery fee</div>
              <div className="colTotal">Total</div>
              <div className="colDeliveryBy">Delivery by</div>
            </div>
            <div className="tableDivider"></div>

            {[1, 2].map((_, idx) => (
              <div className="productRowCustom" key={idx}>
                <div className="colProductCustom">
                  <div className="productInfo">
                    <img
                      src={require('../assets/tv.png')}
                      alt="tv"
                      className="productImage"
                    />
                    <div>
                      <div className="productTitle">Samsung Smart TV</div>
                      <div className="productDesc">24-inch LED Full HD display</div>
                    </div>
                  </div>
                </div>
                <div className="colQty">1</div>
                <div className="colUnitPrice">Rs 3,000</div>
                <div className="colDeliveryFee">Rs 300</div>
                <div className="colTotal">Rs 3,300</div>
                <div className="colDeliveryBy">25 Mar 2025</div>
              </div>
            ))}
          </div>

          {/* Summary + Delete Button Wrapper */}
          <div className="summaryWrapper">
            <div className="summaryContainer">
              <div className="summaryHeader">
                <div>Summary</div>
                <div>Rs 700</div>
              </div>
              <div className="summaryLine discountLine">
                <div className="summaryLabel discountLabel">Discount %</div>
                <div className="discountAmount">(-) Rs 1000</div>
              </div>
              <div className="summaryLine deliveryLine">
                <div className="summaryLabel deliveryLabel">Delivery charges</div>
                <div className="deliveryFree">Free</div>
              </div>
              <div className="dashedDivider"></div>
              <div className="totalRow">
                <span className="totalLabel">Total</span>
                <span className="totalAmount">Rs 1000</span>
              </div>
            </div>
            <button className="deleteRequestBtn">Delete request</button>
            <button className="submitRequestBtn">Submit request</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
