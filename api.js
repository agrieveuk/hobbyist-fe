import axios from 'axios';

const getClubs = async (
  hobby,
  maxDistance,
  price,
  skillLevel,
  ageGroup,
  day
) => {
  let request = 'https://nc-hobbyist.herokuapp.com/api/clubs?';

  if (hobby) request += `&clubType=${hobby}`;

  if (price) request += `&price=${price}`;

  if (skillLevel) request += `&level=${skillLevel}`;

  if (ageGroup) request += `&ageGroup=${ageGroup}`;

  if (day) request += `&day=${day}`;

  console.log(request);

  const {
    data: { clubs },
  } = await axios.get(request);

  return clubs;
};

const getBusinessUser = async (user) => {
  let request = `https://nc-hobbyist.herokuapp.com/api/businessUsers/${user}`;

  const { data: businessUser } = await axios.get(request);
  return businessUser;
};

const getBusinessUserByClub = async (clubName) => {
  let request = `https://nc-hobbyist.herokuapp.com/api/clubs/${clubName}/businessuser`;

  const {
    data: { businessUser },
  } = await axios.get(request);

  const userInfo = await getBusinessUser(businessUser.username);
  return userInfo;
};

export { getClubs, getBusinessUser, getBusinessUserByClub };
