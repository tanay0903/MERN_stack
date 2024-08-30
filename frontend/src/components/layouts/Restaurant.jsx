import React from 'react'

export default function Restaurant() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img src="https://lh3.googleusercontent.com/p/AF1QipOtuK822QqdRKwjK1-l-O6Gd3CYq3MEIeOOCAuo=s680-w680-h510" alt="Sabrro" />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Sabrro New York Pizza</h5>
          <p className="rest_address">KOPA Mall, Pune</p>
          <div className="rating-outer">
            <div className="rating-inner">
            </div>
              <span id="no_of_reviews">(14 reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
