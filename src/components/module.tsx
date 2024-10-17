import { useStore } from '@/store';
import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDown } from 'lucide-react';
import { Lesson } from './lesson';

interface Module {
	moduleIndex: number;
	title: string;
	amountOfLessons: number;
}

export function Module({ moduleIndex, title, amountOfLessons }: Module) {
	const currentModuleIndex = useStore((state) => state.currentModuleIndex);
	const currentLessonIndex = useStore((state) => state.currentLessonIndex);
	const play = useStore((state) => state.play);
	const lessons = useStore((state) => state.course?.modules[moduleIndex].lessons);

	return (
		<Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
			<Collapsible.Trigger type="button" className="flex w-full items-center gap-3 bg-zinc-800 p-4">
				<div className="flex size-10 rounded-full items-center justify-center bg-zinc-950 text-xs">{moduleIndex + 1}</div>
				<div className="flex flex-col gap-1 text-left">
					<strong className="text-sm">{title}</strong>
					<span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
				</div>
				<ChevronDown className="size-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
			</Collapsible.Trigger>

			<Collapsible.Content>
				<nav className="relative flex flex-col gap-4 p-6">
					{lessons?.map((lesson, lessonIndex) => {
						const isCurrent = currentModuleIndex === moduleIndex && currentLessonIndex === lessonIndex;

						return (
							<Lesson key={lesson.id} title={lesson.title} duration={lesson.duration} onPlay={() => play([moduleIndex, lessonIndex])} isCurrent={isCurrent} />
						);
					})}
				</nav>
			</Collapsible.Content>
		</Collapsible.Root>
	);
}
