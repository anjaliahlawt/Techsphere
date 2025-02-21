import styles from "./eventOverview.module.css";
const EventOverview = () => {
  return (
    <div className={styles.eventoverview_main_container}>
      <div className={styles.eventimage}>
        <img src="/src/assets/detailpage/techInnovatorHackathon.svg" className={styles.techhackathon_img} />
      </div>
       <div className={styles.eventdetails_container}> {/*image side main container which contains 3 other major containers: event_details,grid,2 buttons   */}
        <div className={styles.title_container}> {/*First major container on image side*/}
        <div className={styles.header_container}>
            <h1>Tech Innovators Hackathon 2025</h1>
            <button className={styles.button_free}>Free</button>
        </div>
        <div className={styles.eventoverview_subtitle}>
        <p>Dive into a 48-hour coding marathon where innovation meets collaboration. This hackathon is designed for tech enthusiasts to showcase their skills and create real-world solutions.</p>
        </div>
        </div>

        <div className={styles.grid_eventsubdetails_main}>   {/*Second major container on image side (grid)*/}
            <div className={styles.grid_item_eventsubdetails}><p>Mode: Online</p></div>
            <div className={styles.grid_item_eventsubdetails}><p>Start: April 20, 2025</p></div>
            <div className={styles.grid_item_eventsubdetails}><p>Duration: 36 hours</p></div>
            <div className={styles.grid_item_eventsubdetails}><p>Prize Pool: $12,000 + Certification</p></div>
            <div className={styles.grid_item_eventsubdetails}><p>Hosted by: InnoHack Events</p></div>
            <div className={styles.grid_item_eventsubdetails}><p>Contact: events@innohack.com</p></div>
        </div>
        <div className={styles.button_container}> {/*Third major container with 2 buttons(grid)*/}
        <button className={`${styles.button_common} ${styles.button_save_later}`}>Save For Later</button>
        <button className={`${styles.button_common} ${styles.button_register}`}>Register Now</button>
        </div> 
    </div>
    
    </div>
  );
};
export default EventOverview;
