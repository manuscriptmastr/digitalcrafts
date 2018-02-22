def caseConvert(str, conversionType):
  strArray = str.split(' ')
  print(strArray)
  if conversionType == 'camelCase':
    print('this is camelCase: ')
    convertedStr = strArray[0].lower()
    for i in range(1, len(strArray)):
      convertedStr+=strArray[i].capitalize()
  elif conversionType == 'snake_case':
    print('this is snakecase: ')
    # for i in range(1, len(strArray)):
    convertedStr = '_'.join(strArray).lower()
    
  return convertedStr
  
  
str = "This is just a test"
user_inp = raw_input("make a selection '1' for camelCase, '2' for snakecase: ")
# print (type(user_inp))# was checking the type of variable
if user_inp == '1':
  print (caseConvert(str, 'camelCase'))
elif user_inp == '2':  
  print (caseConvert(str, 'snake_case'))
else:
  print ('Oops, try again')