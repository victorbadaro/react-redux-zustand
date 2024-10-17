import { useStore } from '@/store';
import { Module } from './module';
import { SkeletonSidebarLoader } from './skeleton-sidebar-loader';

export function Sidebar() {
	const course = useStore((state) => state.course);
	const isLoading = useStore((state) => state.isLoading);

	if (isLoading) {
		return <SkeletonSidebarLoader />;
	}

	return (
		<aside className="w-80 absolute top-0 right-0 bottom-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
			{course?.modules.map((module, index) => (
				<Module key={module.id} moduleIndex={index} title={module.title} amountOfLessons={module.lessons.length} />
			))}
		</aside>
	);
}
