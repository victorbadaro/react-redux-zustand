import { api } from '@/lib/axios';
import { create } from 'zustand';

interface Lesson {
	id: string;
	title: string;
	duration: string;
}

interface Module {
	id: number;
	title: string;
	lessons: Lesson[];
}

interface Course {
	id: number;
	modules: Module[];
}

interface PlayerState {
	course: Course | null;
	currentModuleIndex: number;
	currentLessonIndex: number;
	isLoading: boolean;
	load: () => Promise<void>;
	play: ([moduleIndex, lessonIndex]: [number, number]) => void;
	next: () => void;
}

export const useStore = create<PlayerState>((set, get) => {
	return {
		course: null,
		currentModuleIndex: 0,
		currentLessonIndex: 0,
		isLoading: true,

		load: async () => {
			set({ isLoading: true });

			const response = await api.get('/courses/1');

			set({
				course: response.data,
				isLoading: false
			});
		},

		play: ([moduleIndex, lessonIndex]) => {
			set({
				currentModuleIndex: moduleIndex,
				currentLessonIndex: lessonIndex
			});
		},

		next: () => {
			const { currentModuleIndex, currentLessonIndex, course } = get();
			const nextLessonIndex = currentLessonIndex + 1;
			const nextLesson = course?.modules[currentModuleIndex].lessons[nextLessonIndex];

			if (nextLesson) {
				set({ currentLessonIndex: nextLessonIndex });
			} else {
				const nextModuleIndex = currentModuleIndex + 1;
				const nextModule = course?.modules[nextModuleIndex];

				if (nextModule) {
					set({
						currentModuleIndex: nextModuleIndex,
						currentLessonIndex: 0
					});
				}
			}
		}
	};
});

export function useCurrentLesson() {
	const currentModuleIndex = useStore((state) => state.currentModuleIndex);
	const currentLessonIndex = useStore((state) => state.currentLessonIndex);
	const course = useStore((state) => state.course);
	const currentModule = course?.modules[currentModuleIndex];
	const currentLesson = currentModule?.lessons[currentLessonIndex];

	return { currentModule, currentLesson };
}
