import styles from "./eventMoreDetails.module.css";
import { eventMoreDetailsData } from "../../constants/eventmoredetails-data";
const EventMoreDetails = () => {
  return (
    <div className={styles.eventmoredetails_main_container}>
      {/* Major container of event more detail(tab menu+details section)*/}
      <div className={styles.eventmoredetails_tab_menu}>
        {/*Major container of tab menu(flex inside which 4 div)*/}
        {eventMoreDetailsData.map((elem) => {
          return (
            <button key={elem.id} className={styles.tab_menu_item}>
              {elem.heading}
            </button>
          );
        })}
      </div>
      <div className={styles.eventdetails_container}>
        {/*eligibilty, timeline, details, speaker-info*/}
        <div
          className={`${styles.eventdetails_item} ${styles.eventdetails_eligibility}`}
        >
          {/*eligibilty main container*/}
          <h1 className={styles.elgibility_heading}>
            {eventMoreDetailsData[0].heading}
          </h1>
          <div className={styles.elgibility_text_container}> {/*FLEX container for eligibilty+ eligiblity text*/}
          {eventMoreDetailsData[0].text.map((elem, idx) => {
            return (
            <span key={idx} className={styles.elgibility_text}>{elem}</span>
          );
          })}
          </div>
        </div>
        <div
          className={`${styles.eventdetails_item} ${styles.eventdetails_timeline}`}   /*FLEX column contianing timeline,day1,day2,day3*/
        >
          {/*timeline main container*/}
          <h1 className={styles.timeline_heading}>
            {eventMoreDetailsData[1].heading}
          </h1>
          {eventMoreDetailsData[1].days.map((elem, idx) => {
            return (
              <div key={idx} className={styles.timeline_days_container}> {/* Flex Container of days having day title and its text(time) */}
                <h3 key={idx}>{Object.keys(elem)[0]}</h3>
                {Object.values(elem)[0].map((arr, idx) => {
                  return <h3 key={idx}>{arr}</h3>;
                })}
                {/* <h3 key={idx}>{Object.values(elem)[0]}</h3>  */}
                </div>
            );
          })}
        </div>
        <div
          className={`${styles.eventdetails_item} ${styles.eventdetails_details}`} /*FLEX column contianing details+details text*/
        >
          {/*details main container*/}
          <h1 className={styles.details_heading}>
            {eventMoreDetailsData[2].heading}
          </h1>
          {eventMoreDetailsData[2].text.map((elem, idx) => {
            return (
              <div key={idx} className={styles.details_text_container}> {/* Flex Container of days having day title and its text(time) */}
                <h3 key={idx}>{Object.keys(elem)[0]}</h3>
                <div key={idx} className={styles.details_subtext_container}> {/* Container of subtext all text bullet points*/}
                {Object.values(elem)[0].map((arr, idx) => {
                  return (
                  <p key={idx}>{arr}</p>
                  );
                })}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={`${styles.eventdetails_item} ${styles.eventdetails_speaker_info}`}
        >
          {/*speakerinfo main container*/}
          <h1 className={styles.speaker_info_heading}>
            {eventMoreDetailsData[3].heading}
          </h1>
          <img src={eventMoreDetailsData[3].imgSrc} />
          <div className={styles.speakerinfo_text_container}>
          <h3 className={styles.speaker_info_title}>{eventMoreDetailsData[3].title}</h3>
          <p>{eventMoreDetailsData[3].subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventMoreDetails;
