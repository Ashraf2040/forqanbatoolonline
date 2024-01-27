import Divider from "./Divider";

const SocialMediaFeed = () => {
  return (
    <div className="flex flex-col  ">
		<div className="self-center"> </div>
    <div className=" flex flex-col items-center shadow-lg   justify-center mb-20">

   
  <div className="flex py-4 items-center  justify-between w-4/5">
  
  <div className="self-start"><iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBFFSCHOOLS%2F%3Flocale%3Dar_AR&tabs=timeline&width=500px&height=499&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="500px" height="400"  scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" className="rounded-md"></iframe></div>


  <div className="face"><div align="center"><a className="twitter-timeline" data-width="600" data-dnt="true"  data-tweet-limit="4" href="https://twitter.com/BFFSCHOOLS?ref_src=twsrc%5Etfw">Tweets by BFFSCHOOLS</a>
<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
</div></div>
  </div>
  
    </div>
    </div>
  )
};

export default SocialMediaFeed
