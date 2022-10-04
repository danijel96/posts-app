export interface IIcon {
  className?: string;
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
  onClick?: () => void;
}

export const LocationIcon = ({ className, width, height, fill }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      fill="none"
      viewBox="0 0 12 14"
    >
      <path
        fill={fill || '#ADB8B7'}
        fillRule="evenodd"
        d="M6 .6c3.093 0 5.6 2.551 5.6 5.698 0 2.071-1.677 4.26-4.959 6.645l-.285.204L6 13.4l-.356-.253C2.174 10.684.4 8.428.4 6.297.4 3.152 2.907.6 6 .6zm0 1.6c-2.203 0-4 1.828-4 4.098 0 1.319 1.19 2.983 3.748 4.94l.252.19.252-.19C8.81 9.28 10 7.617 10 6.298 10 4.028 8.203 2.2 6 2.2zm0 2.4a1.6 1.6 0 110 3.2 1.6 1.6 0 010-3.2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const CommentIcon = ({ className, width, height, onClick }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#586366"
        fillRule="evenodd"
        d="M17 0a3.004 3.004 0 012.995 2.824L20 3v10a3.004 3.004 0 01-2.824 2.995L17 16h-3.5l-2.7 3.6a1 1 0 01-1.524.09L9.2 19.6 6.5 16H3a3.004 3.004 0 01-2.995-2.824L0 13V3A3.004 3.004 0 012.824.005L3 0h14zm0 2H3c-.512 0-.935.387-.993.884L2 3v10c0 .512.387.935.884.993L3 14h4a1 1 0 01.724.31l.076.09 2.2 2.933 2.2-2.933a.999.999 0 01.683-.393L13 14h4c.512 0 .935-.387.993-.884L18 13V3c0-.512-.387-.935-.884-.993L17 2zm-2 7a1 1 0 01.117 1.993L15 11H5a1 1 0 01-.117-1.993L5 9h10zm0-4a1 1 0 01.117 1.993L15 7H5a1 1 0 01-.117-1.993L5 5h10z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
export const LikeIcon = ({ className, width, height, onClick }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#586366"
        fillRule="evenodd"
        d="M3 20a3 3 0 01-3-3v-6a3 3 0 013-3h1.381l3.172-6.342A3 3 0 0110.037.007l.2-.007h.263a2.5 2.5 0 012.495 2.336L13 2.5V8h3.998a3 3 0 012.972 3.415l-.03.173-1.2 6a3 3 0 01-2.764 2.407l-.178.005H3zm1-10H3a1 1 0 00-1 1v6a1 1 0 001 1h1v-8zm6.5-8h-.264a1 1 0 00-.832.445l-.062.108-3.236 6.472a1 1 0 00-.1.331L6 9.472V18h9.798a1 1 0 00.951-.69l.03-.114 1.2-6a1 1 0 00-.785-1.177l-.097-.014-.099-.005H13a2 2 0 01-1.995-1.85L11 8V2.5a.5.5 0 00-.41-.492L10.5 2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
export const ShareIcon = ({ className, width, height }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      fill="none"
      viewBox="0 0 23 20"
    >
      <path
        stroke="#586366"
        strokeWidth="2"
        d="M14 17c0 .89 1.06 1.32 1.681.733l.078-.082 6-7a1 1 0 00.074-1.205l-.074-.097-6-7c-.579-.675-1.664-.311-1.753.538L14 3v3l-1.038.087A11.955 11.955 0 002.004 17.7L2 18l2.659-1.52a18.828 18.828 0 018.85-2.473L14 14v3z"
      ></path>
    </svg>
  );
};

export const UserIcon = ({ className, width, height, stroke, fill }: IIcon) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      className={className}
      viewBox="0 0 64 64"
      fill={fill || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53.3332 56V50.6667C53.3332 47.8377 52.2094 45.1246 50.209 43.1242C48.2086 41.1238 45.4955 40 42.6665 40H21.3332C18.5042 40 15.7911 41.1238 13.7907 43.1242C11.7903 45.1246 10.6665 47.8377 10.6665 50.6667V56"
        stroke={stroke || '#4F4F4F'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.0002 29.3333C37.8912 29.3333 42.6668 24.5577 42.6668 18.6667C42.6668 12.7756 37.8912 8 32.0002 8C26.1091 8 21.3335 12.7756 21.3335 18.6667C21.3335 24.5577 26.1091 29.3333 32.0002 29.3333Z"
        stroke={stroke || '#4F4F4F'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
