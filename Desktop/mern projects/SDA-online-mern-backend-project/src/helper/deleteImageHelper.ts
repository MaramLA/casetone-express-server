import fs from 'fs/promises'

  //delete file from server
  export const deleteImage = async (imagePath: string) => {
    try {
        await fs.unlink(imagePath)

    } catch (error) {
        throw error
    }
  }