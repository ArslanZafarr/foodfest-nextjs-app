import Image from "next/image";
import React from "react";
import Link from "next/link";
import "../common/tabs.css";
import "../common/profileCover.css";

const ManageWalletsComponent = () => {
  return (
    <>
      <section className="profile-cover-section">
        <div className="container">
          <div className="profile-box-wrapper">
            <Image
              className="profile-box-wrapper-image"
              src="/images/profile/pc.jpg"
              width={1200}
              height={200}
              alt="cover"
            />
          </div>
        </div>
      </section>
      {/*  Tabs Section */}
      <section className="user-panel-tabs-sections">
        <div className="container">
          <div className="tabs-content-wrapper">
            <div className="tabs-list-content-wrapper">
              <div className="tab-each-section-wrapper">
                <h4 className="tab-each-section-list-heading">Activity</h4>
                <div className="tab-each-section-list-items">
                  <Link href="/profile">
                    <div className="tab-each-section-list-item">
                      <h5>Profile</h5>
                    </div>
                  </Link>
                  <Link href="/reviews">
                    <div className="tab-each-section-list-item">
                      <h5>Reviews</h5>
                    </div>
                  </Link>

                  <Link href="/recently-viewed">
                    <div className="tab-each-section-list-item ">
                      <h5>Recently Views</h5>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="tab-each-section-wrapper">
                <h4 className="tab-each-section-list-heading">
                  Online Ordering
                </h4>
                <div className="tab-each-section-list-items">
                  <Link href="/orders">
                    <div className="tab-each-section-list-item">
                      <h5>Orders</h5>
                    </div>
                  </Link>

                  <Link href="/addresses">
                    <div className="tab-each-section-list-item ">
                      <h5>My Addresses</h5>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="tab-each-section-wrapper">
                <h4 className="tab-each-section-list-heading">Payments</h4>
                <div className="tab-each-section-list-items">
                  <Link href="/manage-wallets">
                    <div className="tab-each-section-list-item active">
                      <h5>Manage Wallets</h5>
                    </div>
                  </Link>
                  <Link href="/manage-cards">
                    <div className="tab-each-section-list-item ">
                      <h5>Manage Cards</h5>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="tab-each-section-wrapper">
                <h4 className="tab-each-section-list-heading">
                  Account Settings
                </h4>
                <div className="tab-each-section-list-items">
                  <Link href="/manage-passwords">
                    <div className="tab-each-section-list-item">
                      <h5>Manage Passwords</h5>
                    </div>
                  </Link>
                  <Link href="/delete-account">
                    <div className="tab-each-section-list-item ">
                      <h5>Delete Account</h5>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="tab-show-content-wrapper">
              <h1>Hi Manage Wallets</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageWalletsComponent;
