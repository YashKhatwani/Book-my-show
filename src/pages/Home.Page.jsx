import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

function HomePage() {
  const recomendedMovies = [

    {
      src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg",
      title:"Fast and Furious",
      subtitle:"Action/Advantage/Crime/thriller",
    },
    {
      src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg",
      title:"Fast and Furious",
      subtitle:"Action/Advantage/Crime/thriller",
    },
    {
      src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg",
      title:"Fast and Furious",
      subtitle:"Action/Advantage/Crime/thriller",
    },
    {
      src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg",
      title:"Fast and Furious",
      subtitle:"Action/Advantage/Crime/thriller",
    },
    {
      src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg",
      title:"Fast and Furious",
      subtitle:"Action/Advantage/Crime/thriller",
    },
    {
      src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg",
      title:"Fast and Furious",
      subtitle:"Action/Advantage/Crime/thriller",
    },
  ];

  return (
    <div>
      <HeroCarousel />

      <div className="container mx-auto px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 my-3">
          the Best of entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommended movies"
          recommendedMovies={recomendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
                <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img
                            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                            alt="Rupay"
                            className="w-full h-full"
                        />
                </div>
                <PosterSlider
                  title="Premiers"
                  subtitle="Brand new release every Friday"
                  recommendedMovies={recomendedMovies}
                  isDark={true}
                />
            </div>
      </div>
      <div className="container mx-auto px-12 my-8">
        <PosterSlider
          title="Online Streaming"
          subtitle=""
          recommendedMovies={recomendedMovies}
          isDark={false}
        />
      </div>

    </div>
  );
}

export default HomePage;
/*
    // "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg",
    // "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/kabullywood-et00301282-20-04-2021-06-32-16.jpg",
    // "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
    // "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302306-xxwtjnexzz-portrait.jpg",
    // "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302299-asxexqpxeu-portrait.jpg",
    // "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg",
    // "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/kabullywood-et00301282-20-04-2021-06-32-16.jpg",
    // "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
    // "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302306-xxwtjnexzz-portrait.jpg",
    // "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302299-asxexqpxeu-portrait.jpg", */