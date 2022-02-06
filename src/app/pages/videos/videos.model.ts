export interface GetVideosResponse {
    paging: Paging[];
    videos: Video[];
}

export interface Paging {
    itemCount: number;
    pageCount: number;
    pageNumber: number;
    pageSize: number;
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
