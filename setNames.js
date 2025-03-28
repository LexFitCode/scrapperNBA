


export function setName(playerName) {
  let finalName = "";
  switch (playerName) {
    case "Nicolas Claxton":
      finalName = "Nic Claxton";
      break;
    case "Cameron Thomas":
      finalName = "Cam Thomas";
      break;
    case "Moussa Diabaté":
      finalName = "Moussa Diabate";
      break;
    case "Jimmy Butler III":
      finalName = "Jimmy Butler";
      break;
    case "Luka Dončić":
      finalName = "Luka Doncic";
      break;
    case "Jonas Valančiūnas":
      finalName = "Jonas Valanciunas";
      break;
    case "Alexandre Sarr":
      finalName = "Alex Sarr";
      break;
    case "Tim Hardaway Jr.":
      finalName = "Tim Hardaway Jr";
      break;
    case "Dennis Schröder":
      finalName = "Dennis Schroder";
      break;
    case "Alperen Şengün":
      finalName = "Alperen Sengun";
      break;
    case "Jabari Smith Jr.":
      finalName = "Jabari Smith Jr";
      break;
    case "Wendell Carter Jr.":
      finalName = "Wendell Carter Jr";
      break;
    case "Tim Hardaway Jr.":
      finalName = "Tim Hardaway Jr";
      break;
    case "Dennis Schröder":
      finalName = "Dennis Schroder";
      break;
    case "Bruce Brown":
      finalName: "Bruce Brown Jr";
      breal;
    case "Nikola Vučević":
      finalName = "Nikola Vucevic";
      break;
    case "Jonas Valančiūnas":
      finalName = "Jonas Valanciunas";
      break;
    case "Michael Porter Jr.":
      finalName = "Michael Porter Jr";
      break;
    case "Luka Dončić":
      finalName = "Luka Doncic";
      break;
    case "Kevin Porter Jr.":
      finalName = "Kevin Porter Jr";
      break;
    case "Gary Trent Jr.":
      finalName = "Gary Trent Jr";
      break;
    case "Nick Smith Jr.":
      finalName = "Nick Smith Jr";
      break;
      case "P.J. Washington Jr":
        finalName = "PJ Washington Jr";
        break;

    default:
      finalName = playerName;
  }
  return finalName;
}
export function setNameComplete(playerName) {
  if(playerName?.name !== undefined){
    console.log(playerName.name, "nameCOmplete")
    switch (playerName.name) {
      case "Nicolas Claxton":
        playerName.name = "Nic Claxton";
        break;
      case "Cameron Thomas":
        playerName.name = "Cam Thomas";
        break;
      case "Moussa Diabaté":
        playerName.name = "Moussa Diabate";
        break;
      case "Jimmy Butler III":
        playerName.name = "Jimmy Butler";
        break;
      case "Luka Dončić":
        playerName.name = "Luka Doncic";
        break;
      case "Jonas Valančiūnas":
        playerName.name = "Jonas Valanciunas";
        break;
      case "Alexandre Sarr":
        playerName.name = "Alex Sarr";
        break;
      case "Tim Hardaway Jr.":
        playerName.name = "Tim Hardaway Jr";
        break;
      case "Dennis Schröder":
        playerName.name = "Dennis Schroder";
        break;
      case "Alperen Şengün":
        playerName.name = "Alperen Sengun";
        break;
      case "Jabari Smith Jr.":
        playerName.name = "Jabari Smith Jr";
        break;
      case "Wendell Carter Jr.":
        playerName.name = "Wendell Carter Jr";
        break;
      case "Tim Hardaway Jr.":
        playerName.name = "Tim Hardaway Jr";
        break;
      case "Dennis Schröder":
        playerName.name = "Dennis Schroder";
        break;
      case "Bruce Brown":
        playerName.name= "Bruce Brown Jr";
        break;
      case "Nikola Vučević":
        playerName.name = "Nikola Vucevic";
        break;
      case "Jonas Valančiūnas":
        playerName.name = "Jonas Valanciunas";
        break;
      case "Michael Porter Jr.":
        playerName.name = "Michael Porter Jr";
        break;
      case "Luka Dončić":
        playerName.name = "Luka Doncic";
        break;
      case "Kevin Porter Jr.":
        playerName.name = "Kevin Porter Jr";
        break;
      case "Gary Trent Jr.":
        playerName.name = "Gary Trent Jr";
        break;
      case "Nick Smith Jr.":
        playerName.name = "Nick Smith Jr";
        break;
        case "P.J. Washington Jr.":
          playerName.name = "PJ Washington Jr";
          break;
          case "Jaren Jackson Jr.":
            playerName.name = "Jaren Jackson Jr";
            break;
        case "Jusuf Nurkić" :
          playerName.name="Jusuf Nurkic"
          break;
      default:
        playerName.name = playerName.name;
    }
  }

  return playerName;
}
