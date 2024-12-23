import { Stack } from 'expo-router';

export default function ProductsTab() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="products" />
      <Stack.Screen name="productDetails" />
    </Stack>
  );
}
