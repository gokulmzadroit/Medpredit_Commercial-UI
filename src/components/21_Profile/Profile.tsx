import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./Profile.css";
import { chevronBack, chevronForward } from "ionicons/icons";
import { useHistory } from "react-router";

const Profile: React.FC = () => {
  const history = useHistory();
  const sections = [
    {
      title: "Account",
      items: [
        { icon: "pi pi-user", label: "Profile", path: "/userprofile" },
        {
          icon: "pi pi-book",
          label: "Manage Subscriptions",
          path: "/subscriptionPlans",
        },
        {
          icon: "pi pi-indian-rupee",
          label: "Transaction History",
          path: "/transactionHistory",
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          icon: "pi pi-cog",
          label: "Notification Settings",
          path: "/notificationSettings",
        },
        {
          icon: "pi pi-language",
          label: "Choose Language",
          path: "/ChooseLanguage_02",
        },
        { icon: "pi pi-user", label: "Help Center", path: "/helpCenter" },
        { icon: "pi pi-comment", label: "Feedback", path: "/feedback" },
      ],
    },
    {
      title: "More",
      items: [
        { icon: "pi pi-info", label: "About", path: "/about" },
        {
          icon: "pi pi-user",
          label: "Terms and Conditions",
          path: "/termsCondition",
        },
        { icon: "pi pi-user", label: "Privacy Policy", path: "/privacyPolicy" },
        { icon: "pi pi-sign-out", label: "Log Out", path: "/login" },
      ],
    },
  ];

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="medpredit_profile">
          <IonToolbar>
            <IonHeader>
              <IonButtons slot="start">
                <IonBackButton
                  mode="md"
                  defaultHref="/home"
                  icon={chevronBack}
                ></IonBackButton>
              </IonButtons>
            </IonHeader>
          </IonToolbar>

          <div className="profile_top">
            <div className="profile_top_bar">
              <div className="profile_top_bar_header">
                <h2>Krishna Raj R</h2>
                <p>
                  MEDPREDiT ID: <b>MED00001</b>
                </p>
                <p>
                  Phone Number: <b>9876543212</b>
                </p>
              </div>
              <div className="profile_top_bar_avatar">
                <span>KR</span>
              </div>
            </div>
            <div className="profile_top_bar_footer">
              <h3>Join Premium</h3>
              <IonIcon icon={chevronForward} />
            </div>
          </div>

          {sections.map((section, index) => (
            <div key={index} className="profile-body">
              <h3 className="account-header">{section.title}</h3>
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  onClick={() => {
                    item.path.length > 0 && history.push(item.path);
                  }}
                >
                  <div className="account-item">
                    <i className={item.icon}></i>
                    <span className="account-label">{item.label}</span>
                    <IonIcon icon={chevronForward} />
                  </div>
                  {itemIndex !== section.items.length - 1 && (
                    <div className="short-divider"></div>
                  )}
                </div>
              ))}
            </div>
          ))}

          <div className="profile-copyright">
            <p>
              &copy; {new Date().getFullYear()} Medpredit. All rights reserved.
            </p>
            <p>Empowering you with seamless healthcare solutions.</p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
