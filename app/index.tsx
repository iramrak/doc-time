import { View, Text, FlatList, Image, TextInput } from 'react-native'
import React from 'react'
import { slides } from '@/constants'

export default function index() {
  return (
    <View className='mt-12 mx-5'>
        <Text className='text-4xl font-medium '>Astana<Text className='text-[#4E5DFB]'>Clinic</Text></Text>
        <View className='w-full h-[1px] bg-black my-9'></View>

        <View>
            <Text className='text-4xl font-medium'>Новости</Text>
        </View>
        <FlatList 
        data={slides}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        className='my-5'
        renderItem={({item}) => (
            <View className='w-[290px] h-[150px] rounded-lg mr-[15px] bg-[#4E5DFB] flex-1 justify-center items-center'>
                <Text className='text-3xl px-4 text-white text-left'>{item.text}</Text>
            </View>
            
        )}
        />
        
        <View>
            <Text className='text-4xl font-medium my-4'>Запись</Text>
            <View className='w-full h-[350px] p-[15px] bg-[#4E5DFB] rounded-lg'>
                <Text className='text-white text-2xl my-2'>Записаться</Text>

                <View>
                    <TextInput placeholder='Ваше имя' placeholderTextColor={"#7F7F7F"} className='pl-[10px] my-[10px] bg-white w-full h-[52px] rounded-lg'/>
                    <TextInput placeholder='Время' placeholderTextColor={"#7F7F7F"} className='pl-[10px] my-[10px] bg-white w-full h-[52px] rounded-lg'/>
                    <TextInput placeholder='Специализации' placeholderTextColor={"#7F7F7F"} className='pl-[10px] my-[10px] bg-white w-full h-[52px] rounded-lg'/>
                </View>
                <View className='w-[200px] h-[52px] bg-white text-[#4E5DFB] flex rounded-lg justify-center items-center mx-auto my-2'>
                    <Text>Записаться</Text>
                </View>
            </View>
        </View>

        <View className='my-5'>
            <Text>Анализы</Text>
            <View className='w-full h-[80px] bg-[#4E5DFB]'>
                
            </View>
        </View>
    </View>
  )
}