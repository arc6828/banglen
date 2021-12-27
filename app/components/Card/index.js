import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import { Text, Image } from "@components";
import { Images, useTheme } from "@config";

export default function Card(props) {
  const { colors } = useTheme();
  const {
    style,
    children,
    styleContent,
    name,
    station,
    water,
    time,
    status,
    day7,
    month,
    night,
    onPress
  } = props;

  return (
    <TouchableOpacity
      style={[styles.card, { borderColor: colors.border }, style]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Text>{day7}</Text>
      <Text>{month}</Text>
      <Text>{night}</Text>

      <Text>{name}</Text>
      <Text>{station}</Text>
      <Text>{water}</Text>
      <Text>{time}</Text>
      <Text>{status}</Text>

      <View style={[styles.content, styleContent]}>{children}</View>
    </TouchableOpacity>
  );
}

Card.propTypes = {
  // image: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleContent: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  onPress: PropTypes.func,
};

Card.defaultProps = {
  // image: Images.profile2,
  style: {},
  styleContent: {},
  onPress: () => { },
};
