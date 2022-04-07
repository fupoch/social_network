import { useMemo } from "react";

export const useUsersFilter = (users, sort) => {
  const sortedUsers = useMemo(() => {
    if (sort) {
      return [...users].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return users;
  }, [sort, users]);

  return sortedUsers;
};

export const UseUser = (users, sort, query, getUsers) => {
  getUsers(1, 5, query);
  const sortedUsers = useUsersFilter(users, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedUsers.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedUsers]);

  return sortedAndSearchedPosts;
};
