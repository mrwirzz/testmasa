const resultStyle = {
  shadow: {
    elevation: 5,
    width: '100%',
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  inline: {
    display: 'flex',
    flexDirection: "row",
    paddingBottom: 2.5,
    marginLeft: 5,
    color: "#607d8b",
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 10,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 1,
    paddingVertical: 2.5,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingBottom: 10,
  },
  time: {
    color: 'grey',
    marginLeft: 5,
  },
  price: {
    color: "#fff",
    fontWeight: "bold",
  },
  priceContainer: {
    backgroundColor: "#ff6721",
    padding: 3,
    borderRadius: 5,
    display: 'inline-block',
  },
  car: {
    zIndex: 100,
    width: 30,
    height: 30,
    alignSelf: "center",
    backgroundColor: "white",
    marginLeft: 5,
  },
};
const resultItemStyle = {
  itemContainer: {
    width: "100%",
    backgroundColor: "rgb(255, 251, 255)",
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: "rgb(119, 87, 80)",
    borderTopStyle: 'solid',
    alignItems: "center",
    justifyContent: "center",
  },
  directions: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  buyTicket: {
    borderWidth: 1,
    borderColor: "rgb(177, 44, 22)",
    fontSize: "12px",
    padding: "0 7px",
    margin: "0 5px",
    color: "rgb(177, 44, 22)",
  },
  price: {
    color: "rgb(177, 44, 22)",
  },
  icon: {
    color: "#607d8b",
    verticalAlign: "text-bottom",
  },
  car: {
    zIndex: 100,
    width: 20,
    height: 20,
    alignSelf: "center",
    backgroundColor: "white",
    marginLeft: 5,
    verticalAlign: "text-bottom",
  },
};
export { resultStyle, resultItemStyle };