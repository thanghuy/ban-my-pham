import CCarousel from "../../components/CCarousel/CCarousel";
import RoomIcon from "@mui/icons-material/Room";
const ContactModule = () => {
  return (
    <div className="xl:px-20 lg:px-20 md:px-2 sm:px-2 py-5">
      <div className="flex items-center justify-center gap-2 mb-5">
        <RoomIcon />
        <p className="text-2xl font-semibold">Liên hệ với chúng tôi </p>
      </div>
      <CCarousel>
        <img src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/240134981_209454434523166_4729546667190233329_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=wP35bPW074sAX-PDXPV&_nc_ht=scontent.fsgn3-1.fna&oh=c2e13ed668a152608779c9419405e7a9&oe=617874C6" />
        <img src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/240134981_209454434523166_4729546667190233329_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=wP35bPW074sAX-PDXPV&_nc_ht=scontent.fsgn3-1.fna&oh=c2e13ed668a152608779c9419405e7a9&oe=617874C6" />
        <img src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/240134981_209454434523166_4729546667190233329_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=wP35bPW074sAX-PDXPV&_nc_ht=scontent.fsgn3-1.fna&oh=c2e13ed668a152608779c9419405e7a9&oe=617874C6" />
        <img src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/240134981_209454434523166_4729546667190233329_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=wP35bPW074sAX-PDXPV&_nc_ht=scontent.fsgn3-1.fna&oh=c2e13ed668a152608779c9419405e7a9&oe=617874C6" />
        <img src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/240134981_209454434523166_4729546667190233329_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=wP35bPW074sAX-PDXPV&_nc_ht=scontent.fsgn3-1.fna&oh=c2e13ed668a152608779c9419405e7a9&oe=617874C6" />
      </CCarousel>
      <div className="mt-5 mb-5"></div>
    </div>
  );
};
export default ContactModule;
