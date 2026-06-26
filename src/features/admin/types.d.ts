import { Movie } from '@/shared/types';
export type MovieRequest = Movie & { posterFile: File | null };
