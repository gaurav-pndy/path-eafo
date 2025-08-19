// import "./App.css";
import AppLayout from "./layout/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CommonPage from "./pages/CommonPage";
import { useTranslation } from "react-i18next";
import CourseDesc from "./pages/CourseDesc";
import CommonPage2 from "./pages/CommonPage2";
import ExpertsPage from "./pages/ExpertsPage";
import SchedulePage from "./pages/SchedulePage";
import ParticipationVariants from "./pages/ParticipationVariants";
import CompParticipation from "./pages/CompParticipation";
import AwardsPage from "./pages/AwardsPage";
import EAFOPage from "./pages/EAFOPage";
import PaymentOptions from "./pages/PaymentOptions";
import ContactPage from "./pages/ContactPage";
import VisaPage from "./pages/VisaPage";
import SponsorsPage from "./pages/SponsorsPage";

function App() {
  const { t } = useTranslation();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/course-description",
          element: <CourseDesc />,
        },

        {
          path: "/venue",
          element: (
            <CommonPage
              buttonText={t("buttons.venue")}
              buttonLink="venue"
              totalCards={3}
              externalLink="venue"
            />
          ),
        },
        {
          path: "/organizations",
          element: (
            <CommonPage
              buttonText={t("buttons.organizations")}
              buttonLink="organizations"
              totalCards={3}
              externalLink="partners"
            />
          ),
        },
        {
          path: "/pricing",
          element: (
            <CommonPage
              buttonText={t("buttons.pricing")}
              buttonLink="pricing"
              totalCards={3}
              externalLink="pricing"
            />
          ),
        },
        {
          path: "/register-now",
          element: (
            <CommonPage2
              link1="https://forms.eafo.info/EAFO/form/45thEAFOOncoPathologyCourseHematoLymphoidTumors2/formperma/awLe8qSOkmVW-jKvEZv6iHBEtez8ZNUX1oxZX3KR7UI"
              link2="https://forms.eafo.info/EAFO/form/46thEAFOOncoPathologyCourseHematoLymphoidTumors/formperma/NUSjJDo06_LknCioE6hx2qS8ixETxb7QoCDlAafMFDI"
              buttonText={t("buttons.register")}
            />
          ),
        },
        {
          path: "/submit-abstract",
          element: (
            <CommonPage2
              buttonText={t("buttons.submitAbstract")}
              link1="https://forms.eafo.info/EAFO/form/AbstractSubmissionForm44thEAFOOncoPathologyCourse/formperma/jUf2iKE0IapHFutVHCuy2iCvUFEb13coIvc42dJzGWA"
              link2="https://forms.eafo.info/EAFO/form/46thEAFOOncoPathologyCourseHematoLymphoidTumors5/formperma/8CZBDrP4u8ey-Y9-jaGGcrz16mPEO0KE7v_T1EN2olc"
            />
          ),
        },
        {
          path: "/submit-pathology-case",
          element: (
            <CommonPage2
              buttonText={t("buttons.submitPathology")}
              link1="https://forms.eafo.info/EAFO/form/ClinicalCasesSubmission44thEAFOOncoPathologyCourse/formperma/ZBhv6SFd0nlEypso_duMLnNSkm7Sbm4lqW8S9_g6Ork"
              link2="https://forms.eafo.info/EAFO/form/46thEAFOOncoPathologyCourseHematoLymphoidTumors6/formperma/Hi4iKO0xY3FyzaEzBr0etoJXmSNORYVwqSLA9cTpeN0"
            />
          ),
        },
        {
          path: "/submit-research-proposal",
          element: (
            <CommonPage2
              buttonText={t("buttons.submitResearch")}
              link1="https://forms.eafo.info/EAFO/form/ECRCCollaborativeResearchProposal/formperma/L6qSvthN0LucTQh5xTgcFXzbKsek9Bn7WYBgIaHby8A"
              link2="https://forms.eafo.info/EAFO/form/ECRCCollaborativeResearchProposal1/formperma/h7NKARhIroi_jI3d3_QrNM1i_StjMtk-ytdtc769M6I"
            />
          ),
        },
        {
          path: "/experts-and-committees",
          element: <ExpertsPage />,
        },
        {
          path: "/schedule-and-program",
          element: <SchedulePage />,
        },
        {
          path: "/participation-variants",
          element: <ParticipationVariants />,
        },
        {
          path: "/competitive-participation",
          element: <CompParticipation />,
        },
        {
          path: "/awards",
          element: <AwardsPage />,
        },
        {
          path: "/eafo",
          element: <EAFOPage />,
        },
        {
          path: "/payment-options",
          element: <PaymentOptions />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/visa",
          element: <VisaPage />,
        },
        {
          path: "/sponsors",
          element: <SponsorsPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
