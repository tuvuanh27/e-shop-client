import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default function useCart() {
    const store = useStore()
    const router = useRouter()

    const cartItems = computed(() => store.getters['getCartItems'])
    const shippingAddress = computed(() => store.getters['getShippingAddress'])
    const paymentMethod = computed(() => store.getters['getPaymentMethod'])

    const cartSummary = reactive({
        itemsPrice: cartItems.value.reduce((acc, item) => acc + item.quantity * item.price, 0)
    })
    cartSummary.shippingPrice = 0
    cartSummary.taxPrice = 0
    cartSummary.totalPrice = Number((cartSummary.itemsPrice + cartSummary.shippingPrice + cartSummary.taxPrice).toFixed(2))

    const checkout = () => router.push({ name: 'shipping' })
    const saveShippingAddress = shippingAddress => {
        store.dispatch('saveShippingAddress', shippingAddress)
        router.push({ name: 'payment' })
    }
    const savePaymentMethod = paymentMethod => {
        store.dispatch('savePaymentMethod', paymentMethod)
        router.push({ name: 'place_order' })
    }
    
    return {
        cartItems,
        shippingAddress,
        paymentMethod,
        cartSummary,

        checkout,
        saveShippingAddress,
        savePaymentMethod,
        
        isLoading: computed(() => store.getters['utils/isLoading']),
        error: computed(() => store.getters['utils/getError'])
    }
}