{/* Streaming for loading pages faster
    Chunks are rendered in parallel, reducing the overall load time 
*/}

import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
    return <DashboardSkeleton />;
}