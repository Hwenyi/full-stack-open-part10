import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e1e4e8',
    flexDirection: 'row', // 设置横向排列
    alignItems: 'center', // 垂直居中
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1, // 填充可用空间
  },
  description: {
    fontSize: 14,
    color: '#586069',
  },
  language: {
    fontSize: 12,
    color: '#586069',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statsItem: {
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16, // 添加右侧边距
  },
})

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: repository.ownerAvatarUrl }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{repository.fullName}</Text>
        <Text style={styles.description}>{repository.description}</Text>
        <Text style={styles.language}>Language: {repository.language}</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statsItem}>
            <Text>{repository.stargazersCount}</Text>
            <Text>Stars</Text>
          </View>
          <View style={styles.statsItem}>
            <Text>{repository.forksCount}</Text>
            <Text>Forks</Text>
          </View>
          <View style={styles.statsItem}>
            <Text>{repository.reviewCount}</Text>
            <Text>Reviews</Text>
          </View>
          <View style={styles.statsItem}>
            <Text>{repository.ratingAverage}</Text>
            <Text>Rating</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default RepositoryItem
