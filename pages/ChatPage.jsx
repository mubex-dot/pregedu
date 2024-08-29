import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Header from "../components/Header";
import { useChatWithBotMutation, useFetchChatQuery } from "../store/apiSlice";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatWithBot, { isLoading: isSending }] = useChatWithBotMutation();
  const { data: chatHistory, isLoading: isFetching } = useFetchChatQuery();

  useEffect(() => {
    if (chatHistory && chatHistory.status === "success") {
      const initialMessages = chatHistory.data.map((msg) => ({
        id: msg.id.toString(),
        text: msg.response,
        fromUser: false,
      }));
      setMessages(initialMessages);
    }
  }, [chatHistory]);

  const sendMessage = async () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: message,
        fromUser: true,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");

      try {
        const response = await chatWithBot({ message }).unwrap();

        const botReply = {
          id: Date.now().toString(),
          text: response.data.response,
          fromUser: false,
        };
        setMessages((prevMessages) => [...prevMessages, botReply]);
      } catch (err) {
        console.error("Failed to send message:", err);
        alert("Failed to send message. Please try again.");
      }
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        {
          alignSelf: item.fromUser ? "flex-end" : "flex-start",
          backgroundColor: item.fromUser ? "#0B3B07" : "#808080",
        },
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Header toggleSidebar={() => navigation.goBack()} />
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatContainer}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Yi tambaya a nan..."
          value={message}
          onChangeText={setMessage}
          editable={!isSending}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
          disabled={isSending}
        >
          <Text style={styles.sendButtonText}>
            {isSending ? "Sending..." : "Send"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  chatContainer: {
    padding: 10,
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  messageContainer: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    maxWidth: "70%",
  },
  messageText: {
    color: "#fff",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: "#0B3B07",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ChatPage;
