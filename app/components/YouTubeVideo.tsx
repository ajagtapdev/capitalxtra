export default function YouTubeVideo() {
  return (
    <div className="relative w-full aspect-video">
      <iframe
        src="https://www.youtube.com/embed/w17OE9qXFHc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
} 