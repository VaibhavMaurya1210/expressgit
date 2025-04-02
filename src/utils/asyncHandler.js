// Promise property Method



// const asyncHandler = (requestHandler) =>{
//     (req,res,next) =>{
//         Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
//     }
// }

// export {asyncHandler}


const asyncHandler = (ee) => async(res,req,next) => {
    try {
        await ee(res,req,next)
    } catch (error) {
        res.status(err.code || 300).json({
            success:false,
            message:err.message
        })
        
    }
}














// TRY Catch Property Method 

// const  asyncHandler = (fa) => async(req,res,next) => {
//     try {
        
//     } catch (error) {
//         res.status((err.code || 200).json({
//             success:false,
//             message:err.message
//         }))
//     }
// }

