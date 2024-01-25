import { View, Text, ScrollView } from "react-native";
import React, { useContext, useState } from "react";

import { ClickContext } from "../context/ClickContext.js";

import { styles } from "../styles/MainScreenStyles.js";
import KeyPad from "../components/KeyPad.jsx";
import { ThemeContext } from "../context/ThemeContext.js";

const MainScreen = () => {
  const theme = useContext(ThemeContext);

  const [value, setValue] = useState("0");
  const [lastValue, setLastValue] = useState("");
  const [bracketOpen, setBracketOpen] = useState(false);
  const [isError, setError] = useState(false);

  const solvePercentage = (value) => {
    const values = value.split("%");
    if (values.length == 2) {
      setValue(`${(eval(values.at(0)) * eval(values.at(-1) || 1)) / 100}`);
    } else {
      setError(true);
      setLastValue(value);
      setValue("Operation Not Supported");
    }
  };

  const calculateResult = () => {
    try {
      if (
        (value.match(/\(/g) || []).length === (value.match(/\)/g) || []).length
      ) {
        if ("+-*/.".includes(value.slice(-1))) {
          setValue(`${eval(value.slice(0, -1))}`);
        } else {
          if (value.includes("%")) {
            solvePercentage(value);
          } else {
            setValue(`${eval(value)}`);
          }
        }
      } else {
        setLastValue(value);
        setError(true);
        setValue("Format Error");
      }
    } catch (e) {
      setLastValue(value);
      setValue("Format Error");

      setError(true);
    }
  };

  const handlePress = (btnValue) => {
    if (!isError) {
      if (btnValue === "AC") {
        setValue("0");
        setBracketOpen(false);
        setError(false);
        setLastValue("");
      } else if (btnValue === "()") {
        if (value === "0") {
          setValue("(");
          setBracketOpen(true);
        } else if ("+-*/%".includes(value.slice(-1))) {
          if (!bracketOpen) {
            setValue(value + "(");
            setBracketOpen(true);
          }
        } else if (value.slice(-1) === ".") {
        } else if (value.slice(-1) === "(") {
        } else {
          if (!isNaN(value.slice(-1))) {
            if (bracketOpen) {
              setValue(value + ")");
              setBracketOpen(false);
            } else {
              setValue(value + "*(");
              setBracketOpen(true);
            }
          }
        }
      } else if (btnValue === "=") {
        calculateResult();
      } else if (btnValue === "<") {
        if (value.length === 1) {
          setValue("0");
        } else {
          if (value.slice(-1) === "(") {
            setValue(value.slice(0, -2));
          }
        }
        if (isError) {
          setError(false);
          setValue(lastValue);
        }
      } else if (btnValue === ".") {
        if (!isNaN(value.slice(-1))) {
          const lastValue = value.split(/[-+*/%]/).at(-1);
          if (!lastValue.includes(".")) {
            if (lastValue == "") {
              setValue(value + "0.");
            } else {
              setValue(value + ".");
            }
          }
        }
        if (value.slice(-1) === "(") {
          setValue(value + "0.");
        }
      } else if ("+-*/%".includes(btnValue)) {
        if ("+-*/%".includes(value.slice(-1))) {
          setValue(value.slice(0, -1) + btnValue);
        } else {
          if (value.slice(-1) === ".") {
            setValue(value + "0" + btnValue);
          } else {
            setValue(value + btnValue);
          }
        }
        // console.log(value);
      } else {
        if (value === "0") {
          setValue(btnValue);
        } else {
          if (value.slice(-1) === ")") {
            setValue(value + "*" + btnValue);
          } else {
            setValue(value + btnValue);
          }
        }
      }
    } else {
      setError(false);
      setBracketOpen(false);
      setLastValue("");
      setValue("0");
    }
  };

  return (
    <ClickContext.Provider
      value={{
        handlePress,
      }}
    >
      <View style={[styles.mainScreen]}>
        <ScrollView
          ref={(ref) => (this.scrollView = ref)}
          onContentSizeChange={() =>
            this.scrollView.scrollToEnd({
              animated: true,
            })
          }
          style={[styles.display, theme === "light" && styles.darkTheme]}
        >
          <Text
            style={[
              styles.displayText,
              theme === "light" && { color: "#ffffff" },
              isError && { color: "#ff3311" },
            ]}
          >
            {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Text>
        </ScrollView>
        <KeyPad />
      </View>
    </ClickContext.Provider>
  );
};

export default MainScreen;
