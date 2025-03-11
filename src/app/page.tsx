"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { CSAVideo } from "../types/csa-video";
import CSACard from "./components/CSACard";

export default function Home() {
  const [videos, setVideos] = useState<CSAVideo[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  // Fetch videos from API
  const fetchVideos = useCallback(async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/videos?page=${page}`);
      const { videos: newVideos, hasMore: more } = await res.json();

      setVideos((prev) => [...prev, ...newVideos]);
      setHasMore(more);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Failed to load videos", error);
    }
    setLoading(false);
  }, [page, hasMore, loading]);

  useEffect(() => {
    fetchVideos();
  }, []); // Load initial data

  // Intersection Observer to trigger loading
  const lastVideoRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchVideos();
          }
        },
        { threshold: 1.0 }
      );

      if (node) observer.current.observe(node);
    },
    [loading, fetchVideos]
  );

  return (
    <main className="min-w-full flex min-h-screen flex-col">
      <div className="flex flex-col gap-6 justify-center items-center mb-20">
        <h1 className="text-center font-headline text-4xl md:text-7xl px-16">
          WHATS IN THE BAG??
        </h1>

        <div className="md:h-screen md:overflow-y-scroll flex flex-col md:flex-row md:flex-wrap gap-4 justify-center items-center bg-slate-50 w-5/6 md:w-2/3 py-6">
        {videos.map((record, idx) => {
          const isLastVideo = idx === videos.length - 1;
          return (
            <div key={idx} ref={isLastVideo ? lastVideoRef : null}>
              <CSACard record={record} isFeatured={false} />
            </div>
          );
        })}

        </div>

        {loading && <p>Loading more videos...</p>}
      </div>
    </main>
  );
}
