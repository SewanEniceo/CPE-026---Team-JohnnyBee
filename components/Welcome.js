import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, ScrollView, Pressable } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Welcome() {
  const [alarms, setAlarms] = useState([]);
  const [isAlarmOn, setIsAlarmOn] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const showTimePicker = () => setTimePickerVisible(true);

  const hideTimePicker = () => setTimePickerVisible(false);

  const handleTimeConfirm = (time) => {
    setSelectedTime(time);
    addAlarm(time); 
    hideTimePicker();
  };

  const addAlarm = (time) => {
    if (time) {
      const formattedTime = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      const newAlarm = { time: formattedTime, isOn: isAlarmOn };
      setAlarms([...alarms, newAlarm]);
      setSelectedTime(null);
    }
  };

  const toggleAlarm = (index) => {
    const updatedAlarms = [...alarms];
    updatedAlarms[index].isOn = !updatedAlarms[index].isOn;
    setAlarms(updatedAlarms);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alarms</Text>
      <ScrollView style={styles.alarmsContainer}>
        {alarms.map((alarm, index) => (
          <View key={index} style={styles.alarmItem}>
            <Text style={styles.alarmTime}>{alarm.time}</Text>
            <Switch
              value={alarm.isOn}
              onValueChange={() => toggleAlarm(index)}
            />
          </View>
        ))}
      </ScrollView>
      <Pressable style={styles.addAlarmContainer} onPress={showTimePicker}>
        <Icon name="add" style={styles.addIcon} />
      </Pressable>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#176B87",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  alarmsContainer: {
    flex: 1,
  },
  alarmItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  alarmTime: {
    fontSize: 16,
  },
  addAlarmContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  addIcon: {
    fontSize: 30,
    color: "#64CCC5",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
