import "./style.scss";
import OHeader from "../../components/Organism/o-header";
import ONumbers from "../../components/Organism/o-numbers";
import ONodes from "../../components/Organism/o-nodes";
import OCoins from "../../components/Organism/o-coins";
import OWhatNow from "../../components/Organism/o-what-now";
import ONeedAnswers from "../../components/Organism/o-need-answers";
import OStillHelp from "../../components/Organism/o-still-help";
import OFooter from "../../components/Organism/o-footer";
import { UsersNodes } from "../../components/usersNodes.js";
import { UsersNumbers } from "../../components/userNumbers.js";

function Home() {
  return (
    <div className="Home">
      <OHeader />

      <UsersNumbers />

      <OCoins />

      <UsersNodes />

      <OWhatNow />



      <OStillHelp />

      <OFooter />
    </div>
  );
}

export default Home;
