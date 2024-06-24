import config from "../config/config";

import { Client, Databases, ID, Storage, Query } from "appwrite";

export class AuthService {
  Client = new Client();
  Databases;
  Storage;

  constructor() {
    this.Client.setEndpoint(config.appwritrUrl).setProject(
      config.appwriteProjectId
    );
    this.Databases = new Databases(this.Client);
    this.Storage = new Storage(this.Client);
  }

  async createPost({ title, content, featureImage, slug, status, userId }) {
    try {
      return await this.Databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featureImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite Error", error);
    }
  }

  async updatePost(slug, { title, content, featureImage, status }) {
    try {
      return await this.Databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featureImage,
          status,
        }
      );
    } catch (error) {
      log("Appwrite Error", error);
    }
  }

  async deletPost(slug) {
    try {
      await this.Databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );

      return "Post deleted";
    } catch (error) {
      console.log("Appwrite Error", error);
      return "Error deleting post";
    }
  }

  async getPost(slug) {
    try {
      return await this.Databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite Error", error);
      return "Error getting post";
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.Databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite Error", error);
      return "Error getting posts";
    }
  }
  
  //   File upload service

  async uploadFile(file) {
    try {
      return await this.Storage.createFile(
        config.appwriteFileBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite Error", error);
      return "Error uploading file";
    }
  }

  async deleteFile(fileId) {
    try {
      await this.Storage.deleteFile(config.appwriteBucketId, fileId);
      return "File deleted";
    } catch (error) {
      console.log("Appwrite Error", error);
      return "Error deleting file";
    }
  }

  async filePreview(fileId) {
    try {
      return await this.Storage.getFilePreview(
        config.appwriteFileBucketId,
        fileId
      );
    } catch (error) {
      console.log("Appwrite Error", error);
      return "Error getting file preview";
    }
  }
}

const service = new AuthService();
export default service;
