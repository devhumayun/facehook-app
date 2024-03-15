import { useProfile } from "./useProfile";

export const useAvatar = (post) => {
  const { state } = useProfile();
  const isMe = post?.author?.avatar === state?.user?.avatar;
  const avatar = isMe ? `${state?.user?.avatar}` : `${post?.author?.avatar}`;

  const avatarURL = `${import.meta.env.VITE_SERVER_BASE_URL}/${avatar}`;

  return { avatarURL };
};
