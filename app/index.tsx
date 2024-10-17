import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function index() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
  
    const clearInputs = () => {
      setText1('');
      setText2('');
      setText3('');
    };

  return (
    <View className='mt-14 mx-5'>

        {/* Заголовок */}
        <Text className='text-4xl font-bold '><Text className='text-[#4E5DFB]'>Astana</Text>Clinic</Text>
        <Text className='text-md font-medium text-[#6d6d6d] mb-2'>Запись на прием оналайн быстро и легко</Text>
        
        <View className='w-full h-[1px] bg-black my-1'></View>
        
        {/* Наши услуги и сами блоки */}
        <View>
            <Text className='text-3xl font-semibold my-2'>Наши услуги</Text>

            {/* 1 блок запись */}
            <View className='w-full h-[350px] px-[15px] pt-1.5 bg-[#4E5DFB] rounded-2xl'>
                <Text className='text-white text-2xl my-2 font-semibold'>Записаться</Text>

                <View>
                    <TextInput placeholder='Ваше имя' value={text1} placeholderTextColor={"#7F7F7F"}
                     className='text-lg flex pl-[10px] my-[6px] pb-1.5 bg-white w-full h-[52px] rounded-lg'
                     onChangeText={setText1}
                     />
                     
                    <TextInput placeholder='Дата 23.10.2024' value={text2} placeholderTextColor={"#7F7F7F"}
                    className='text-lg flex pl-[10px] my-[6px] pb-1.5 bg-white w-full h-[52px] rounded-lg'
                    onChangeText={setText2}
                    />

                    <TextInput placeholder='Специализации' value={text3}placeholderTextColor={"#7F7F7F"}
                    className='text-lg flex pl-[10px] my-[6px] pb-1.5 bg-white w-full h-[52px] rounded-lg'
                    onChangeText={setText3}
                    />
                </View>

                <TouchableOpacity onPress={clearInputs} className='w-[200px] h-[52px] bg-white text-[#4E5DFB] flex rounded-lg justify-center items-center mx-auto mt-6'>
                    <Text className='text-xl font-bold text-[#4E5DFB]'>Записаться</Text>
                </TouchableOpacity>
            </View>
        </View>

        {/* 2 блок анализы */}
        <View className='my-3'>
            <View className='w-full h-[200px] px-[15px] pt-1.5 bg-[#4E5DFB] rounded-2xl'>
                <Text className='text-white text-2xl my-3 font-semibold'>Получить анализы</Text>

                {/*1 Анализ */}
                <TouchableOpacity className='w-full h-[50px] bg-white rounded-lg flex-row items-center justify-between px-2'>
                    <Text className='text-[#4E5DFB] text-xl text-left font-medium'>Анализ на Биохимию</Text>
                    <View className='w-[40px] h-[40px] flex justify-center items-center rounded-lg bg-[#4E5DFB]'>
                        <AntDesign name="download" size={24} color="white" />
                    </View>
                </TouchableOpacity>

                 {/*2 Анализ */}
                <TouchableOpacity className='w-full h-[50px] bg-white rounded-lg flex-row items-center justify-between px-2 mt-3'>
                    <Text className='text-[#4E5DFB] text-xl text-left font-medium'>Анализ на Гемоглобин</Text>
                    <View className='w-[40px] h-[40px] flex justify-center items-center rounded-lg bg-[#4E5DFB]'>
                        <AntDesign name="download" size={24} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}