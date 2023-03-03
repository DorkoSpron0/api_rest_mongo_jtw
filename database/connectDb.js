import mongoose from 'mongoose'

try{
    await mongoose.connect(process.env.URI_MONGO)
    console.log('😎😎😎 dataabase connected')
} catch(e) {
    console.log(e.message)
}
    