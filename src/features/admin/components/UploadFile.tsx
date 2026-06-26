import { useState } from 'react';
import { UploadIcon } from '@/shared/components/icons/Upload';
import { useMovieManagement } from '@/features/admin/hooks/useMovieManagement';
import { type FileInfo } from '@/shared/types';

type UploadFileProps = {
  existingPoster?: string;
};

export function UploadFile({ existingPoster }: UploadFileProps) {
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);
  const { handleDrop, handleFileChange } = useMovieManagement();

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.currentTarget.classList.add('border-tertiary');
  };

  const handleDragLeave = (event: React.DragEvent<HTMLLabelElement>) => {
    event.currentTarget.classList.remove('border-tertiary');
  };

  const bgImage = !fileInfo
    ? {
        backgroundImage: `url(${existingPoster})`,
      }
    : {};

  return (
    <div className="grid gap-2">
      <label
        className="min-h-50 overflow-hidden bg-cover bg-center"
        style={bgImage}
        onDrop={(e) => setFileInfo(handleDrop(e))}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="flex h-full w-full flex-col items-center justify-center border-2 border-dashed border-neutral backdrop-blur-[2px] text-shadow-primary text-shadow-xs">
          <span>
            <UploadIcon />
          </span>
          {!fileInfo ? (
            <p className="m-2 text-center font-bold text-pretty">
              Suelte el archivo o clickee para subir el poster
            </p>
          ) : (
            <>
              <p>{fileInfo.name}</p>
              <p>{fileInfo.size}</p>
            </>
          )}
        </div>
        <input
          type="file"
          className="w-full"
          name="posterFile"
          hidden
          accept="image/*"
          onChange={(e) => setFileInfo(handleFileChange(e))}
        />
      </label>
    </div>
  );
}
