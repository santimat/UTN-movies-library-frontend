import { UploadIcon } from '@/shared/components/icons/Upload';
import { useState } from 'react';

type FileInfo = {
  name: string;
  size: number;
};

export function UploadFile() {
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0] || null;
    if (uploadedFile) {
      console.log(uploadedFile);
      setFileInfo({ name: uploadedFile.name, size: uploadedFile.size });
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const inputFile =
      event.currentTarget.closest<HTMLInputElement>('input[type="file"]');

    const uploadedFile = event.dataTransfer.files[0] || null;
    event.currentTarget.classList.remove('border-tertiary');
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.currentTarget.classList.add('border-tertiary');
  };
  const handleDragLeave = (event: React.DragEvent<HTMLLabelElement>) => {
    event.currentTarget.classList.remove('border-tertiary');
  };

  return (
    <div className="grid gap-2">
      <label
        className="mx-auto flex min-h-30 w-full flex-col items-center justify-center border-2 border-dashed border-neutral"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <span>
          <UploadIcon />
        </span>
        {!fileInfo ? (
          <p className="mt-2 font-bold">
            Suelte el archivo o clickee para subir el poster
          </p>
        ) : (
          <>
            <p>{fileInfo.name}</p>
            <p>{fileInfo.size}</p>
          </>
        )}
        <input
          type="file"
          className="w-full"
          name="posterFile"
          hidden
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}
