function NewsLetter() {
  return ( 
    <section className="p-1 p-md-4 p-lg-5" id="newsletter">
  <div className="container">
    <div className="row text-center theme-text-color">
      <h3 className="section_title">Never Miss A Drop!</h3>
      <p>Subscribe to our ultra-exclusive drop list and be the first to know about
      upcoming Nifty drops.</p>
    </div>

    <form className="mt-3" action="/">
      <div className="input-wrapper">
        <div className="theme-text-color">
          <input className="bg-transparent" placeholder="Enter your email address " />
        </div>
        <button className="btn fill-theme-btn" type="submit"> <span>Subscribe now</span></button>
      </div>
    </form>
  </div>
</section>

   );
}

export default NewsLetter;