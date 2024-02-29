import React, { useState, useEffect } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';

const SavedNewsScreen = () => {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    // Load saved articles from AsyncStorage when the component mounts
    loadSavedArticles();
  }, []);

  const loadSavedArticles = async () => {
    try {
      const savedArticlesString = await AsyncStorage.getItem('savedArticles');
      if (savedArticlesString) {
        const savedArticlesData = JSON.parse(savedArticlesString);
        setSavedArticles(savedArticlesData);
      }
    } catch (error) {
      console.error('Error loading saved articles:', error);
    }
  };

  const handleUnsaveArticle = async (articleId) => {
    // Remove the article with the given ID from savedArticles
    const updatedSavedArticles = savedArticles.filter(article => article.id !== articleId);
    setSavedArticles(updatedSavedArticles);
    // Save the updated list of saved articles to AsyncStorage
    await AsyncStorage.setItem('savedArticles', JSON.stringify(updatedSavedArticles));
  };

  return (
    <View>
      <Text>Saved News</Text>
      {savedArticles.map(article => (
        <View key={article.id}>
          <Text>{article.title}</Text>
          <Button title="Unsave" onPress={() => handleUnsaveArticle(article.id)} />
        </View>
      ))}
    </View>
  );
};

export default SavedNewsScreen;
