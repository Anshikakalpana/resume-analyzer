// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// interface Fileuploaderprops{
//   onFileSelect?:(file:File |null)=>void 
// }
// export default function Uploadresume({onFileSelect}:Fileuploaderprops) {
//    const [file , setFile]=useState();
//   const onDrop = useCallback((acceptedFiles: File[]) => {
//     const file =acceptedFiles[0] || null;
//     onFileSelect?.(file)
//     console.log("Accepted files:", acceptedFiles);
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop , multiple:false,    });

//   return (
//     <div
//       {...getRootProps()}
//       className="border-2 border-dashed border-indigo-400 rounded-xl p-10 text-center cursor-pointer hover:bg-indigo-900/10 transition-all"
//     >
//       <input {...getInputProps()} />
//       {isDragActive ? (
//         <p className="text-indigo-300 text-lg font-semibold">Drop the files here ...</p>
//       ) : (
//         <p className="text-indigo-200 text-lg">
//           Drag and drop your resume here, or click to select
//           <p>PDF (MAX 10 MB)</p>
//         </p>
//       )}
//     </div>
//   );
// }

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileUploaderProps {
  onFileSelect?: (file: File | null) => void;
}

export default function Uploadresume({ onFileSelect }: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0] || null;
    setFile(selectedFile);
    onFileSelect?.(selectedFile);
    console.log("Accepted file:", selectedFile);
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "application/pdf": [".pdf"]
    },
    maxSize: 10 * 1024 * 1024, // 10 MB
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-indigo-400 rounded-xl p-10 text-center cursor-pointer hover:bg-indigo-900/10 transition-all"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-indigo-300 text-lg font-semibold">Drop the file here ...</p>
      ) : (
        <div className="text-indigo-200 text-lg">
          <p>Drag and drop your resume here, or click to select</p>
          <p className="text-sm mt-1">PDF only (max 10 MB)</p>
        </div>
      )}
      {file ? (
        <p className="text-indigo-400 mt-4">
          ✅ Uploaded: <span className="font-semibold">{file.name}</span> (
          {(file.size / 1024).toFixed(2)} KB)
        </p>
      ) : null}
    </div>
  );
}
