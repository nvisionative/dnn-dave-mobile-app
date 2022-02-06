export interface GetVideoResponse {
    id: number;
    title: string;
    date: string;
    summary: string;
    image: string;
    showNotes: string;
    youTubeId: string;
    relatedVideos: Video[];
}

export interface Video {
    id: number;
    title: string;
    date: string;
    summary: string;
    image: string;
    showNotes: string;
    youTubeId: string;
    relatedVideos: Video[];
}
