import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Post } from './entity/post';
import { Category } from './entity/category';

// connection settings are in the "ormconfig.json" file
(async () => {
  try {
    const connection = await createConnection();
    
    const category1 = new Category();
    category1.name = 'TypeScript';
    await connection.manager.save(category1);
  
    const category2 = new Category();
    category1.name = 'Programming';
  
    await connection.manager.save(category2);
  
    const post = new Post();
    post.title = 'Control flow based type analysis';
    post.text = 'TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.';
    post.categories = [category1, category2];
  
    await connection.manager.save(post);
  
    console.log("Post has been saved: ", post);
  } catch (error) {
    throw error;
  }
})();
