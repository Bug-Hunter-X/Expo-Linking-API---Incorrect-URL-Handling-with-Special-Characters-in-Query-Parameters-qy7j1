# Expo Linking API - Special Character Handling Issue

This repository demonstrates a bug in Expo's `Linking` API when handling deep links containing query parameters with special characters. The issue lies in the `Linking.getInitialURL()` method failing to properly parse URLs with characters like '+' or '%'.

## Bug Description
When launching the app via a deep link with special characters in the query parameters, `Linking.getInitialURL()` returns `null`, preventing the app from correctly processing the deep link and leading to unexpected behavior. 

## Reproduction
1. Clone this repository.
2. Run the app using Expo Go or EAS Build.
3. Try launching the app using a deep link that contains '+' or '%' in the query parameters (e.g., `myapp://route?param1=value+with+plus&param2=value%25`).
4. Observe that `Linking.getInitialURL()` returns `null`.

## Solution
The solution involves using the `URL` API to properly parse the URL and decode the query parameters to account for special characters.